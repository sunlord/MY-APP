<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/images/user.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间: <span>2021-7-19</span></p>
                    <p>上次登陆地点: <span>武汉</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px">
                <el-table :data="tableData" style="width: 100%">
                    <!-- <el-table-column prop="name" label="课程">
                    </el-table-column>
                    <el-table-column prop="todayBuy" label="今日购买">
                    </el-table-column>
                    <el-table-column prop="monthBuy" label="本月购买">
                    </el-table-column>
                    <el-table-column prop="totalBuy" label="总购买">
                    </el-table-column> -->
                    <el-table-column v-for="(val, key) in tableLabel" :prop="key" :key="key" :label="val"></el-table-column>
                </el-table>
            </el-card>
            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'apple',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'mi',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'huawei',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'sumsung',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'meizu',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            }
        };
    },
};
</script>

<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    img {
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
}
.userinfo {
    .name {
        font-size: 32px;
        margin-bottom: 10px;
    }
    .access {
        color: #999999;
    }
}
.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;
        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}
</style>