// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = [];
export default {
    getStatisticalData: () => {
        // mock.random.float 产生随机数100到8000之,保留小数,最小0位,最大0位
        for (let i=0; i < 7; i++) {
            List.push(
                Mock.mock({
                    apple:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    meizu:Mock.Random.float(100,8000,0,0),
                    samsung:Mock.Random.float(100,8000,0,0),
                    mi:Mock.Random.float(100,8000,0,0),
                    huawei:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return {
            code:20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: 'mi',
                        value: 2999
                    },
                    {
                        name: 'apple',
                        value: 5999
                    },
                    {
                        name: 'vivo',
                        value: 1500
                    },
                    {
                        name: 'meizu',
                        value: 2200
                    },
                    {
                        name: 'samsung',
                        value: 4500
                    },
                    {
                        name: 'oppo',
                        value: 1999
                    },
                    {
                        name: 'huawei',
                        value: 3999
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 770
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['2010101', '20230102', '20230103', '20230104', '20230105', '20230106', '20230107'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy:22000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy:24000
                    },
                    {
                        name: 'apple',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy:65000
                    },
                    {
                        name: 'mi',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy:45000
                    },
                    {
                        name: 'meizu',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy:22000
                    },
                    {
                        name: 'samsung',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy:34000
                    },
                    {
                        name: 'huawei',
                        todayBuy: 400,
                        monthBuy: 5000,
                        totalBuy:30000
                    }
                ]
            }
        }
    }
}