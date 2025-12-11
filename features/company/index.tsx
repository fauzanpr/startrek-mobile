import { AppConfig } from '@/config/app-config';
import { useDebounce } from '@/hooks/use-debounce';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { AnimatedFAB, Searchbar } from 'react-native-paper';
import CompanyCard from './components/company-card';
import { useCompaniesQuery } from './hooks/company';
import { CompanyMapper } from './mapper';

function CompanyPage() {
  const [search, setSearch] = useState("");
  const searchDebounced = useDebounce(search, 500);

  const { data, isFetching } = useCompaniesQuery({
    search: searchDebounced
  });

  return (
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

        <ScrollView className='flex gap-4 mb-20'>
          {isFetching ? (
            <ActivityIndicator size={18} />
          ) : CompanyMapper(data?.results || [])?.map(company => (
            <CompanyCard key={company?.subid} data={{ created: company.created, name: company.name }} />
          ))}
        </ScrollView>
      </View>
      <AnimatedFAB
        icon={"plus"}
        label='Add Company'
        extended={false}
        color={"white"}
        onPress={() => {
          router.push("/(tabs)/company/1")
        }}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: AppConfig.palette.primary
        }}
      />
    </View>
  )
}

export default CompanyPage;
