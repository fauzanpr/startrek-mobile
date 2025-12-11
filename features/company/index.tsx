import { AppConfig } from '@/config/app-config';
import { useDebounce } from '@/hooks/use-debounce';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { AnimatedFAB, Searchbar } from 'react-native-paper';
import CompanyCard from './components/company-card';
import { useCompaniesQuery } from './hooks/company';
import { CompanyMapper } from './mapper';

function CompanyPage() {
  const [search, setSearch] = useState("");
  const searchDebounced = useDebounce(search, 500);

  const { data, isFetching, refetch } = useCompaniesQuery({
    search: searchDebounced
  });

  return (
    <>
      <View className='h-full'>
        <View className='p-6 flex gap-4'>
          <Text className='text-2xl font-medium text-center'>Company</Text>

          <View className='mb-4'>
            <Searchbar
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder='Search here'
              style={{
                backgroundColor: "white"
              }}
            />
          </View>

          {isFetching ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              className='mb-20'
              data={CompanyMapper(data?.results || [])}
              renderItem={({ item }) => (
                <CompanyCard
                  data={item}
                />
              )}
              refreshing={false}
              onRefresh={() => {
                refetch();
              }}
              onEndReached={() => {
                console.log("masuk end");
              }}
            />
          )}
        </View>
        <AnimatedFAB
          icon={"plus"}
          label='Add Company'
          extended={false}
          color={"white"}
          onPress={() => {
            router.push("/(tabs)/company/add");
          }}
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            backgroundColor: AppConfig.palette.primary
          }}
        />
      </View>
    </>
  )
}

export default CompanyPage;
