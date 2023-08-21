import React from "react";
import { FlatList, View } from "react-native";
import { Error } from "../../components/error";
import { ListFooterLoading } from "../../components/listFooterLoading";
import { ListItem } from "../../components/listItem";

import { useGetStarshipsListQuery } from "../../hooks/useGetStarshipsListQuery";
import { Loading } from "../../components/loading";

export const SpaceshipsScreen = () => {
  const spaceShipsQuery = useGetStarshipsListQuery();

  const spaceShipsList = spaceShipsQuery.data?.pages
    .map(({ results }) => results)
    .flat(1);

  const onEndReached = () => {
    if (!spaceShipsQuery.isFetching && spaceShipsQuery.hasNextPage) {
      spaceShipsQuery.fetchNextPage();
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      name={item.name}
      detail={item.manufacturer}
      label="Manufacturer:"
    />
  );

  const renderFooter = () => {
    if (spaceShipsQuery.isFetching) {
      return <ListFooterLoading />;
    }

    return null;
  };

  if (spaceShipsQuery.isLoading) {
    return <Loading />;
  }

  if (spaceShipsQuery.isError) {
    return <Error error="Failed to fetch spaceships" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={spaceShipsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        ListFooterComponent={renderFooter}
        style={{ backgroundColor: "#000" }}
      />
    </View>
  );
};
