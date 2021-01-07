<template>
  <div class="graph">
    <!-- 等腰三角形 -->
    <div style="border-left: 30px solid transparent;border-right: 30px solid transparent;
    border-bottom: 60px solid rgb(77,134,141);" />
    <!-- 直角三角形 -->
    <div style="border-left: 30px solid #E3B444;border-bottom: 60px solid transparent;" />
    <!-- 等腰直角三角形 -->
    <div style="border-right: 60px solid #59471B;border-bottom: 60px solid transparent;" />
    <!-- 平行四边形 -->
    <div style="height:50px;width:100px;background:#ff8c00;transform: skew(20deg);" />
    <!-- 菱形 -->
    <div style="border: 25px solid transparent;border-bottom: 35px solid #ff8c00;
    position: relative;top:-25px;" class="lingxing" />
    <!-- 梯形 -->
    <div style=" width:50px;border-bottom: 75px solid red;border-left: 25px solid transparent;
    border-right: 25px solid transparent;" />
    <!-- 红叉 -->
    <div style="position: relative;width: 80px;height: 10px;background-color: #f00;top:20px;
    transform: rotate(45deg);border-radius: 50%;" class="hongcha" />
    <!-- 半圆 -->
    <div style="width: 100px;height: 50px;background: #8A2BE2;border-radius: 50px 50px 0 0;" />
    <!-- 1/4⚪ -->
    <div style="width: 50px;height: 50px;background: #8A2BE2;border-radius: 50px 0 0 0;" />
    <!-- 3/4⚪ -->
    <div style="border-right: 30px solid transparent;border-top: 30px solid red;
    border-left: 30px solid red;border-bottom: 30px solid red;border-radius: 50%;" />
    <!-- 鸡蛋 -->
    <div style="width: 126px;height: 180px;background-color:#FFEFD5;
     border-radius: 50%  50%  50%  50%  / 60%   60%   40%  40%;" />
    <!-- 圆环 -->
    <div style="width: 100px;height: 100px;border: 15px solid red;position: relative;border-radius: 50%;" />
    <!-- 放大镜 -->
    <div style="width: 64px;height: 64px;border: 10px solid black;position: relative;
    border-radius: 50%;" class="fangdajing" />
    <!-- 四色圆环 -->
    <div style="width: 100px;height: 100px;border: 15px solid white;position: relative;
    border-radius: 50%;border-top: 15px solid red;border-left: 15px solid orange;
    border-bottom: 15px solid green;border-right: 15px solid blue;" />
    <!-- 牛角 扇叶 不规则圆环 -->
    <div style="width: 120px;height: 120px;border-left: 60px solid green;
    border-right: 60px solid blue;border-top: 60px solid red;border-radius: 50%;" />
    <!-- 圆锥 -->
    <div style="  border-left: 60px solid transparent;border-right: 60px solid transparent;
    border-top: 120px solid red;border-radius: 50%;" />
    <!-- 五边形 -->
    <div style="position: relative;width: 54px;border-top: 50px solid red;top:50px;
    border-left: 18px solid transparent;border-right: 18px solid transparent;" class="wubianxing" />
    <!-- 六边形 -->
    <div style="width: 138.5px;height: 80px;background: red;position: relative;top:40px;" class="liubianxing" />
    <!-- 五角星 -->
    <div style=" position: relative;display: block;border-left:  100px solid transparent;
    border-right: 100px solid transparent;border-bottom:70px  solid red;
    transform:rotate(35deg);" class="wujiaoxing" />
    <!-- 枫叶 -->
    <div style="border-left: 50px solid transparent;border-right: 50px solid transparent;
    border-bottom: 100px solid red;position: relative;" class="fengye" />
    <!-- 12角星 -->
    <div style="background: red;width: 150px;height: 150px;position: relative;" class="jiaoxing12" />
    <!-- 爱心 -->
    <div style="position: relative;width: 100px;height: 90px;" class="aixin" />
    <!-- 钻石 -->
    <div style="   border-style: solid;border-color: transparent transparent #4e1919 transparent;
    border-width: 0 25px 25px 25px;height: 0;width: 50px;position: relative;" class="zuanshi" />
    <!-- 向下箭头 -->
    <div style=" width: 0;color: #f00;border: 15px solid transparent;border-top: 25px solid;
      box-shadow: 0 -32px 0 -6px;" />
    <!-- 五杠 -->
    <div style=" width: 40px; height: 0; color: red;
    box-shadow: 20px 20px 0 3px ,20px 0 0 3px ,20px 40px 0 3px, 20px 10px 0 3px ,20px 30px 0 3px;" />
    <!-- 月亮 -->
    <div style="  width: 80px;height: 80px;border-radius: 50%;box-shadow: 15px 15px 0 0 red;" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.graph {
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 10px 30px;
    width: 0;
    height: 0;
  }
  .lingxing {
    &::after {
      content: "";
      position: absolute;
      top: 35px;
      left: -25px;
      width: 0;
      height: 0;
      border: 25px solid transparent;
      border-top: 35px solid #ff8c00;
    }
  }
  .hongcha {
    &::after {
      content: "";
      position: absolute;
      left: 0px;
      width: 80px;
      height: 10px;
      background-color: #f00;
      transform: rotate(90deg);
      border-radius: 50%;
    }
  }
  .fangdajing {
    &::after {
      content: "";
      position: absolute;
      right: -40px;
      bottom: -16px;
      border-width: 0;
      background: black;
      width: 56px;
      height: 10px;
      transform: rotate(45deg);
    }
  }
  .wubianxing {
    &::after {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      top: -85px;
      left: -18px;
      border-bottom: 35px solid red;
      border-left: 45px solid transparent;
      border-right: 45px solid transparent;
    }
  }
  .liubianxing {
    &::before {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 69.25px solid transparent;
      border-right: 69.25px solid transparent;
      border-bottom: 40px solid red;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -40px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 69.25px solid transparent;
      border-right: 69.25px solid transparent;
      border-top: 40px solid red;
    }
  }
  .wujiaoxing {
    &::before {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      top: -45px;
      left: -62.5px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 80px solid red;
      transform: rotate(-35deg);
    }
    &::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      top: 3px;
      left: -105px;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-bottom: 70px solid red;
      transform: rotate(-70deg);
    }
  }
  .fengye {
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 100px solid red;
      position: absolute;
      top: 30px;
      left: -50px;
    }
  }
  .jiaoxing12 {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      width: 150px;
      background: red;
      transform: rotate(30deg);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      width: 150px;
      background: red;
      transform: rotate(60deg);
    }
  }
  .aixin {
    &::before {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: red;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 50px;
      height: 80px;
      background: red;
      border-radius: 50px 50px 0 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
  .zuanshi {
    &::after {
      content: "";
      position: absolute;
      top: 25px;
      left: -25px;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: #4e1919 transparent transparent transparent;
      border-width: 70px 50px 0 50px;
    }
  }
}
</style>