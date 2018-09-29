<template>
    <div>
      <el-table
        :data="lists"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="login_name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {},
  mounted() {
    var s = this.$request({
      url: "user/list",
      method: "get"
    }).then(res => {
      this.lists = res.data;
    });
  }
};
</script>

<style>
</style>


