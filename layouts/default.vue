<template>
    <div class="common-layout">
      <el-container>
        <el-header>头部</el-header>
        <el-container>
          <el-aside width="200px">侧边栏</el-aside>
          <el-main><slot /></el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  