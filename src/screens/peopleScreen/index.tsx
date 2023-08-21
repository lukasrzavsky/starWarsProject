import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { useGetPeopleListQuery } from "../../hooks/useGetPeopleListQuery";

import { ListItem } from "../../components/listItem";
import { Error } from "../../components/error";
import { Pagination } from "../../components/pagination";
import { Loading } from "../../components/loading";

export const PeopleScreen = () => {
  const [page, setPage] = useState(0);

  const peopleQuery = useGetPeopleListQuery();

  const peopleQueryPage = peopleQuery.data?.pages[page];

  const data = peopleQueryPage?.results ?? [];

  const isFirstPage = page === 0;
  const isLastPage = !peopleQueryPage?.next;

  const onNextPress = async () => {
    if (!peopleQuery.isFetching && peopleQuery.hasNextPage) {
      await peopleQuery.fetchNextPage();
    }

    if (!isLastPage) {
      setPage((previousPage) => previousPage + 1);
    }
  };

  const handleOnPreviousPress = () => {
    if (page === 0) {
      return;
    }

    setPage((previousPage) => previousPage - 1);
  };

  const renderItem = ({ item }) => (
    <ListItem name={item.name} detail={item.gender} label="Gender:" />
  );

  const renderFooter = () => (
    <Pagination
      onPreviousPress={handleOnPreviousPress}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      onNextPress={onNextPress}
    />
  );

  if (peopleQuery.isLoading || peopleQuery.isFetchingNextPage) {
    return <Loading />;
  }

  if (peopleQuery.isError) {
    return <Error error="Failed to fetch people" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={{ backgroundColor: "#000" }}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
