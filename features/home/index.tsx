import { AppConfig } from '@/config/app-config';
import { onLogout } from '@/utils/auth';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useEffect, useRef } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import MenuCard from './components/MenuCard';
import MenusList from './components/MenusList';
import StatsCard from './components/StatsCard';
import SummaryStatsCard from './components/SummaryStatsCard';
import { useProductsTotalQuery } from './hooks/master-stats';
import { useGetPointsGivenCountQuery, useGetPointsRedeemedCountQuery, useGetProductSoldCount } from './hooks/order-stats';

function HomePage() {
    const sheetRef = useRef<BottomSheet>(null);

    const { data: productSoldCount, isFetching: fetchProductSoldCount } = useGetProductSoldCount();
    const { data: pointsGivenCount, isFetching: fetchPointsGivenCount } = useGetPointsGivenCountQuery();
    const { data: pointsRedeemedCount, isFetching: fetchPointsRedeemedCount } = useGetPointsRedeemedCountQuery();

    // master
    const { data: productsTotal, isFetching: fetchProductsTotal } = useProductsTotalQuery();

    useEffect(() => {
        console.log("Data", productsTotal);
        // sheetRef.current?.close();
    }, [productsTotal]);

    return (
        <>
            <View className='w-full h-full'>
                {/* welcoming card */}
                <View className='p-8 bg-white border border-gray-50 border-b-blue-200'>
                    <Text className='text-2xl font-medium'>Hello 👋</Text>
                    <Text className='text-gray-500 text-lg mb-6'>Good Morning</Text>

                    <TouchableWithoutFeedback onPress={onLogout}>
                        <View className='bg-red-50 px-4 py-2 rounded-xl'>
                            <Text className='text-red-600 text-lg'>Logout</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                {/* main content container */}
                <ScrollView className='p-4'>
                    {/* stats sales summary */}
                    <View className='flex flex-row flex-wrap gap-4 my-4'>
                        <SummaryStatsCard
                            label='Products Sold'
                            value={productSoldCount?.total_products_sold?.toString() || ""}
                            loading={fetchProductSoldCount}
                        />

                        <SummaryStatsCard
                            label='Points Given'
                            value={pointsGivenCount?.points_given.toString() || ""}
                            loading={fetchPointsGivenCount}
                        />

                        <SummaryStatsCard
                            label='Points Redeemed'
                            value={pointsRedeemedCount?.points_redeemed.toString() || ""}
                            loading={fetchPointsRedeemedCount}
                        />
                    </View>

                    {/* stats */}
                    <View className='my-4 flex rounded-3xl overflow-hidden shadow-lg border border-gray-200'>
                        <StatsCard
                            label='Total Products'
                            value={productsTotal?.total_products?.toString() || ""}
                            renderIcon={
                                <Ionicons
                                    size={18}
                                    name='cube'
                                    color={AppConfig.palette.primary}
                                />
                            }
                            loading={fetchProductsTotal}
                        />
                        <StatsCard
                            label='Available Products'
                            value='1820'
                            renderIcon={
                                <Ionicons
                                    size={18}
                                    name='checkmark-circle'
                                    color={AppConfig.palette.primary}
                                />
                            } />
                        <StatsCard
                            label='Users'
                            value='1820'
                            renderIcon={
                                <Ionicons
                                    size={18}
                                    name='people'
                                    color={AppConfig.palette.primary}
                                />
                            } />
                        <StatsCard
                            label='Company'
                            value='1820'
                            renderIcon={
                                <Ionicons
                                    size={18}
                                    name='business'
                                    color={AppConfig.palette.primary}
                                />
                            } />
                        <StatsCard
                            noBorder
                            label='Store'
                            value='1820'
                            renderIcon={
                                <Ionicons
                                    size={18}
                                    name='storefront'
                                    color={AppConfig.palette.primary}
                                />
                            } />
                    </View>

                    {/* menus */}
                    <View className='bg-primary rounded-3xl border p-4 my-4'>
                        <Text className='text-center font-semibold text-xl text-white'>Menu</Text>
                        <View className='border border-b-0 border-blue-200 my-4' />
                        {/* container */}
                        <View className='flex flex-row flex-wrap gap-4 p-4'>
                            {/* menu item */}
                            <MenuCard
                                name='Dashboard'
                                renderIcon={<Ionicons name='grid-sharp' />}
                            />
                            <MenuCard
                                name='Sales Quantity'
                                renderIcon={<Ionicons name='bar-chart-sharp' />}
                            />
                            <MenuCard
                                name='Reward Verif'
                                renderIcon={<Ionicons name='trophy-sharp' />}
                            />
                            <MenuCard
                                name='Products'
                                renderIcon={<Ionicons name='cube-sharp' />}
                            />
                            <MenuCard
                                name='Products'
                                renderIcon={<Ionicons name='business' />}
                            />
                            <MenuCard
                                name='All Menus'
                                specialAllMenu
                                renderIcon={<></>}
                                onPress={() => {
                                    sheetRef.current?.snapToIndex(0);
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <BottomSheet
                ref={sheetRef}
                snapPoints={["80%"]}
                enablePanDownToClose
                index={-1}
                onChange={(index) => {
                    if (index === (-1)) {
                        sheetRef.current?.close();
                    }
                }}
            >
                <BottomSheetScrollView>
                    <View className='p-6'>
                        <Text className='text-2xl font-medium mb-6 text-center'>All Menus</Text>

                        <MenusList />
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </>
    )
}

export default HomePage;