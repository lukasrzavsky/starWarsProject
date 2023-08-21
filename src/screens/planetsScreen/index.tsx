import React, { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { useGetPlanetsListQuery } from "../../hooks/useGetPlanetsListQuery";

import { ListItem } from "../../components/listItem";
import { ListFooterLoading } from "../../components/listFooterLoading";
import { Error } from "../../components/error";
import { Loading } from "../../components/loading";
import { useDebounce } from "use-debounce";

export const PlanetsScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  const [debouncedValue] = useDebounce(searchValue, 200);

  const planetsQuery = useGetPlanetsListQuery(debouncedValue);

  const planetsList = planetsQuery.data?.pages
    .map(({ results }) => results)
    .flat(1);

  const onEndReached = () => {
    if (!planetsQuery.isFetching && planetsQuery.hasNextPage) {
      planetsQuery.fetchNextPage();
    }
  };

  const renderItem = ({ item }) => (
    <ListItem name={item.name} detail={item.population} label="Population:" />
  );

  const renderFooter = () => {
    if (planetsQuery.isFetching) {
      return <ListFooterLoading />;
    }

    return null;
  };

  if (planetsQuery.isError) {
    return <Error error="Failed to fetch planets" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search"
        style={{ paddingHorizontal: 15 }}
      />
      {planetsQuery.isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={planetsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.6}
          ListFooterComponent={renderFooter}
          style={{ backgroundColor: "#000" }}
        />
      )}
    </View>
  );
};
