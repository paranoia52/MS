<template>
  <div class="addmusic">
    <el-dialog title="上传曲目" :show-close="false" :visible.sync="visible">
      <el-form :model="form" size="small" ref="ruleForm" :rules="rules">
        <el-form-item label="歌曲名称" label-width="100px" prop="Title">
          <el-input v-model="form.Title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="演唱者" label-width="100px" prop="Author">
          <el-input v-model="form.Author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封面" label-width="100px" prop="Cover">
          <!-- <el-input v-model="form.Cover" autocomplete="off"></el-input> -->
           <el-upload class="avatar-demo" action="http://127.0.0.1:3000/upload"
            :show-file-list="false" :on-success="handleSuccessCover">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传歌曲" label-width="100px" prop="MusicUrl">
          <el-upload class="avatar-demo" action="http://127.0.0.1:3000/upload"
            :show-file-list="false" :on-success="handleSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传音频文件，且不超过50M</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="上传歌词" label-width="100px" prop="Lyric">
          <el-input v-model="form.Lyric" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类别" label-width="100px" prop="Type">
          <el-radio-group v-model="form.Type">
            <el-radio :label="1">热门</el-radio>
            <el-radio :label="2">国语</el-radio>
            <el-radio :label="3">日语</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="$emit('cancel')">取 消</el-button>
        <el-button size="small" type="primary" @click="confirm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { AddMusic } from "@/http/api";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        Title: "",
        Author: "",
        Cover: "",
        MusicUrl: "",
        Lyric: "",
        Type: "",
      },
      rules: {
        Title: [{ required: true, message: "曲目名称", trigger: "blur" }],
        Author: [{ required: true, message: "请输入作者", trigger: "change" }],
        Cover: [{ required: true, message: "请选择封面", trigger: "change" }],
        MusicUrl: [{ required: true, message: "请上传", trigger: "change" }],
        Lyric: [{ required: true, message: "请上传歌词", trigger: "change" }],
        Type: [{ required: true, message: "请选择类型", trigger: "change" }],
      },
      fileList: [],
    };
  },
  methods: {
    confirm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form);
          AddMusic(this.form).then((res) => {
            console.log(res);
            if (res.code == 0) {
              this.$emit("cancel");
              this.$message("添加成功");
              this.form = {};
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleSuccess(value) {
      this.form.MusicUrl = value.url;
    },
    handleSuccessCover(value){
      this.form.Cover = value.url;
    }
  },
};
</script>
<style lang="less" scoped>
.addmusic {
  text-align: left;
  /deep/ .el-dialog {
    width: 400px;
  }
}
</style>