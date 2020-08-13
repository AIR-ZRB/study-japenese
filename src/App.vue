<template>
    <div id="app">
        <el-container>
            <el-header>
                <h1>青空学日语</h1>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <el-row class="tac">
                        <el-col>
                            <el-menu
                                default-active="1"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                            >
                                <el-menu-item-group
                                    v-for="item in menuList"
                                    :key="item.title"
                                >
                                    <template slot="title">{{item.title}}</template>
                                    <el-menu-item 
                                      v-for="items in item.children"
                                      :key="items.name"
                                      index="1-1"
                                    >
                                      {{items.name}}
                                    </el-menu-item >
                                </el-menu-item-group>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            menuList: [
                {
                    title: "基础",
                    children: [{ name: "平假名" }, { name: "固定用法" }],
                },
                {
                    title: "日常用语",
                    children: [
                        { name: "介绍" },
                        { name: "人物" },
                        { name: "兴趣爱好" },
                        { name: "饮食" },
                        { name: "时间" },
                        { name: "家居" },
                        { name: "家庭" },
                        { name: "学校" },
                        { name: "学校参观" },
                    ],
                },
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    created() {},
};
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
}
// 内容区域
.el-container {
    height: 100%;
}
// 头部标题栏
.el-header {
    border-bottom: 1px solid #ccc;
    @include flex-layout(space-between);
}
// 左侧导航栏
.el-aside {
  
    border-right: 1px solid #ccc;
}
</style>
