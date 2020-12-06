<template>
  <div>
    <transition name="dis_list">
      <div class="list_box" v-if="listIsDis">
        <transition name="music_alert">
          <span class="music_alert" v-if="musicAlertState">{{musicAlertVal}}</span>
        </transition>
        <div class="list_close" @click="DisList">x</div>
        <div class="music_list">
          <div class="list_l">
            <ul class="music_type">
              <li
                v-for="(item,index) in musicTypeList"
                :key="index"
                @click="_getMusicType(item.id)"
                :class="{type_active:item.id==thisMusicType}"
              >{{item.name}}</li>
            </ul>
            <div class="list_title">
              <span style="font-size: 14px;">歌曲列表</span>
              <img :src="musicStateButton" alt class="music_state" @click="MusicStateChange" />
              <div class="music_search_box">
                <input type="text" class="music_search" v-model="musicSearchVal" placeholder="搜索歌曲" />
                <transition name="music_search">
                  <ul class="search_list" v-if="musicSearchVal!=''">
                    <li v-for="(item,index) in musicSearchList" :key="index" @click="ListAdd(item)">
                      <span class="music_search_name">{{item.name}}</span>
                      <span class="music_search_ar">{{item.artists[0].name}}</span>
                    </li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="music_ul_title">
              <span>歌曲</span>
              <span>歌手</span>
              <span>专辑</span>
            </div>
            <ul class="list">
              <li
                v-for="(item,index) in thisMusicList"
                :key="index"
                @mouseover="ButtonActive(index)"
                @dblclick="ListPlay((thisListPage-1)*10+index)"
              >
                <div class="this_music_shlter" v-if="(thisListPage-1)*10+index==thisMusicIndex"></div>
                <span>{{item.name}}</span>
                <span>{{item.ar[0].name}}</span>
                <span>{{item.al.name}}</span>
                <transition name="list_button">
                  <div class="music_button" v-if="listButtonActiveIndex==index">
                    <div
                      class="list_play"
                      title="播放这首歌"
                      :style="{backgroundImage:'url('+listPlay+')'}"
                      @click="ListPlay((thisListPage-1)*10+index)"
                    ></div>
                    <div
                      class="list_play"
                      title="添加到 My Songs"
                      :style="{backgroundImage:'url('+add+')'}"
                      @click="ListAdd(item)"
                      v-if="thisMusicType!=-1"
                    ></div>
                  </div>
                </transition>
              </li>
            </ul>
            <div class="list_page">
              <div class="page_last" v-if="thisListPage!=1" @click="ListChange(true)"></div>
              <div
                class="page_next"
                v-if="thisListPage!=Math.ceil(musicList.length/10)"
                @click="ListChange(false)"
              >></div>
            </div>
          </div>
          <div class="list_r">
            <img class="music_list_bg" :src="musicImg" />
            <div class="music_list_shlter" :style="{backgroundImage:'url('+shlter+')'}"></div>
            <ul class="music_talk_list">
              <li v-for="(item,index) in hotTalkList" :key="index">
                <div class="talk_head">
                  <img :src="item.user.avatarUrl" alt class="talk_head_img" />
                  <span class="talk_head_name">{{item.user.nickname}}</span>
                </div>
                <p class="talk_content">
                  <img class="talk_icon_l" :src="talkicon1" />
                  {{item.content}}
                  <img class="talk_icon_r" :src="talkicon2" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <div class="bbox" :class="{bbox_active:disActive}">
      <div
        class="pan"
        :style="{backgroundImage:'url('+pan+')'}"
        :class="{pan_active:disActive}"
        @click="DisActive"
      >
        <img :src="musicImg" alt class="pan_c" />
      </div>
      <div
        class="box"
        :style="{backgroundImage:'url('+musicImg+')'}"
        :class="{box_active:disActive}"
        @dblclick="DisList"
      >
        <div
          class="music_shlter_2"
          :style="{backgroundImage:'url('+musicImg+')'}"
          :class="{shlter_active:disActive}"
        ></div>
        <div
          class="music_shlter"
          :style="{backgroundImage:'url('+musicImg+')'}"
          :class="{shlter_active:disActive}"
        ></div>
        <div class="music_shlter_3"></div>
        <div class="music_dis">
          <div class="dis_list" @click="DisList">···</div>
          <p class="music_title">{{musicTitle}}</p>
          <p class="music_intro">歌手: {{musicName}}</p>
          <ul class="music_words">
            <div class="music_words_box" :style="{top:wordsTop+'px'}">
              <li
                v-for="(item,index) in musicWords"
                :key="index"
                class="music_word"
                :class="{word_highlight:wordIndex==index}"
              >{{item}}</li>
            </div>
          </ul>
        </div>
        <div class="control_box">
          <div class="control_button">
            <img :src="playIcon" alt class="control_icon" />
          </div>
          <div class="progress">
            <div class="progress_c" :style="{width:currentProgress}">
              <div class="progress_circle">
                <div class="progress_circle_c"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video id="music" autoplay="autoplay" :src="musicUrl" name="media"></video>
    </div>
  </div>
</template>
<script>
import {
  getWords,
  getMusicInfo,
  getMusicUrl,
  getHotMusic,
  getSearchSuggest,
  getHotTalk
} from "./api/music";
import pan from "./img/pan.png";
import play from "./img/play.png";
import pause from "./img/pause.png";
import add from "./img/add.png";
import shlter from "./img/list_pan.png";
import listPlay from "./img/list_play_hover.png";
import state0 from "./img/state_0.png";
import state1 from "./img/state_1.png";
import talkicon1 from "./img/talkicon1.png";
import talkicon2 from "./img/talkicon2.png";

export default {
  name: "Player",
  data() {
    return {
      o: 0,
      top: 0,
      pan,
      play,
      pause,
      add,
      shlter,
      listPlay,
      state0,
      state1,
      talkicon1,
      talkicon2,
      playState: true,
      playIcon: pause,
      musicImg: "",
      musicUrl: "",
      musicWords: [],
      musicTitle: "",
      musicName: "",
      wordsTime: [],
      wordsTop: 0,
      wordIndex: 0,
      currentProgress: "0%",
      musicList: [],
      myMusicList: [], //存储在本地   可以开始判断有没有 让用户一开始就听这个列表
      thisMusicIndex: 1,
      disActive: false,
      listIsDis: false,
      listButtonActiveIndex: -1,
      thisListPage: 1,
      musicTypeList: [
        { name: "热歌榜", id: 1 },
        { name: "新歌榜", id: 0 },
        { name: "飙升榜", id: 3 },
        { name: "嘻哈榜", id: 18 },
        { name: "My Songs", id: -1 }
      ],
      thisMusicType: -1,
      notPlay: [],
      musicState: 0, //0列表循环  1单曲循环
      musicStateButton: state1,
      musicSearchVal: "",
      musicSearchList: [],
      musicAlertVal: "",
      musicAlertState: false,
      musicAlertTimer: "",
      //新增歌词评论
      hotTalkList: []
    };
  },
  mounted() {
    this.Player();
  },
  created() {
    this._getMusicType(3);
    this.DisAuthorInfo(); //禁删~感谢配合
  },
  computed: {
    thisMusicList() {
      return [...this.musicList].splice((this.thisListPage - 1) * 10, 10); //分页
    }
  },
  watch: {
    musicSearchVal() {
      if (this.musicSearchVal == "") {
        this.musicSearchList = [];
      } else {
        getSearchSuggest(this.musicSearchVal).then(res => {
          if (res.data.result.songs == undefined) {
            this.musicSearchList = [];
          } else {
            this.musicSearchList = res.data.result.songs;
          }
        });
      }
    }
  },
  methods: {
    //禁删~感谢配合
    DisAuthorInfo() {
      console.log(
        "%c音乐播放器作者----仲威，博客地址：https://blogme.top",
        "background-color:rgb(30,30,30);border-radius:4px;font-size:12px;padding:4px;color:rgb(220,208,129);"
      );
    },
    MusicAlert(val) {
      this.musicAlertState = true;
      this.musicAlertVal = val;
      clearTimeout(this.musicAlertTimer);
      this.musicAlertTimer = setTimeout(() => {
        this.musicAlertState = false;
        this.musicAlertVal = "";
      }, 2000);
    },
    ListAdd(obj) {
      getMusicInfo(obj.id).then(res => {
        this.musicSearchVal = "";
        if (this.myMusicList.length == 0) {
          this.myMusicList = [res.data.songs[0]];
          this._getMusicType(-1);
          //第一次搜索直接播放
        } else {
          this.myMusicList.push(res.data.songs[0]);
          //提示已经添加进去
        }
        this.MusicAlert("添加成功");
      });
    },
    MusicStateChange() {
      if (this.musicState == 0) {
        this.musicState = 1;
        this.musicStateButton = this.state0;
        this.MusicAlert("已切换为单曲循环模式");
      } else {
        this.musicState = 0;
        this.musicStateButton = this.state1;
        this.MusicAlert("已切换为列表循环模式");
      }
    },
    DisList() {
      this.listIsDis = this.listIsDis ? false : true;
    },
    ListChange(isLast) {
      if (isLast) {
        this.thisListPage--;
      } else {
        this.thisListPage++;
      }
    },
    ListPlay(id) {
      if (this.thisMusicIndex != id) {
        this.thisMusicIndex = id > this.musicList.length - 1 ? 0 : id;
        this._getInfo();
        this.top = 0;
        this.o = 0;
        this.wordIndex = 0;
        this.wordsTop = 0;
        this.currentProgress = "0%";
      }
    },
    ButtonActive(id) {
      this.listButtonActiveIndex = id;
    },
    DisActive() {
      this.disActive = this.disActive ? false : true;
    },
    _getMusicType(id) {
      if (this.thisMusicType != id) {
        this.notPlay = [];
        if (id == -1) {
          if (this.myMusicList.length != 0) {
            this.musicList = this.myMusicList;
            this.thisMusicType = id;
            this.thisMusicIndex = 0;
            this.thisListPage = 1;
            this._getInfo();
            this.top = 0;
            this.o = 0;
            this.wordIndex = 0;
            this.wordsTop = 0;
            this.currentProgress = "0%";
          } else {
            //自定义库没有歌曲 提示需要搜索才可以添加
            this.MusicAlert("没有歌曲,需要自己添加");
          }
        } else {
          getHotMusic(id).then(res => {
            this.musicList = res.data.playlist.tracks.splice(0, 200);
            this.thisMusicType = id;
            this.thisMusicIndex = 0;
            this.thisListPage = 1;
            this._getInfo();
            this.top = 0;
            this.o = 0;
            this.wordIndex = 0;
            this.wordsTop = 0;
            this.currentProgress = "0%";
          });
        }
      }
    },
    _getInfo() {
      getMusicUrl(this.musicList[this.thisMusicIndex].id).then(res => {
        if (
          res.data.data[0].url == null ||
          res.data.data[0].url == "" ||
          res.data.data[0].url == undefined
        ) {
          if (this.notPlay.length != this.musicList.length) {
            let nextIndex = this.thisMusicIndex + 1;
            if (this.notPlay.indexOf(this.thisMusicIndex) == -1) {
              this.notPlay.push(this.thisMusicIndex);
            }
            this.MusicAlert(
              `${this.musicList[this.thisMusicIndex].name}因为一些原因不能播放`
            );
            this.ListPlay(nextIndex); //寻找下一首歌  直到找到

            //提示这首歌不能放
          } else {
            //遍历完没有找到
            console.log("not");
            this.MusicAlert("此列表所有歌都不能播放");
          }
        } else {
          this.musicUrl = res.data.data[0].url.replace("http://", "https://");
          this.musicImg =
            this.musicList[this.thisMusicIndex].al.picUrl.replace(
              "http://",
              "https://"
            ) + "?param=300y300";
          this.musicTitle = this.musicList[this.thisMusicIndex].name;
          let name_arr = [];
          this.musicList[this.thisMusicIndex].ar.forEach(i => {
            name_arr.push(i.name);
          });
          this.musicName = name_arr.join("/");
          getWords(this.musicList[this.thisMusicIndex].id).then(res => {
            if (!res.data.nolyric) {
              let info = this.Cut(res.data.lrc.lyric);
              this.musicWords = info.wordArr;
              this.wordsTime = info.timeArr;
            }
          });
          getHotTalk(this.musicList[this.thisMusicIndex].id).then(res => {
            let count = 0;
            this.hotTalkList = res.data.hotComments.splice(0, 3);
            this.hotTalkList.forEach(e => {
              count += e.content.length;
              e.user.avatarUrl = e.user.avatarUrl + "?param=50y50";
            });
            if (count >= 200) {
              this.hotTalkList = this.hotTalkList.slice(0, 2);
            }
          });
        }
      });
    },
    Ltrim(s) {
      return s.replace(/(^\s*)/g, "");
    },
    Rtrim(s) {
      return s.replace(/(\s*$)/g, "");
    },
    //歌词截取函数
    Cut(str) {
      let timeArr = [];
      let wordArr = [];
      timeArr = str.split("[");
      timeArr.splice(0, 1);
      for (let i = 0; i < timeArr.length; i++) {
        let cut = timeArr[i].split("]");
        let time = cut[0].split(".")[0].split(":");
        timeArr[i] = Number.parseInt(time[0]) * 60 + Number.parseInt(time[1]);
        timeArr[i] = isNaN(timeArr[i]) ? 0 : timeArr[i]; //处理NaN
        wordArr[i] = this.Rtrim(this.Ltrim(cut[1]));
      }
      return { timeArr: timeArr, wordArr: wordArr };
    },
    Player() {
      let self = this;
      let playerTimer = setInterval(timer, 1000);
      function timer() {
        self.currentProgress = `${(player.currentTime / player.duration) *
          100}%`;
        if (player.currentTime >= player.duration) {
          //切歌
          if (self.musicList.length != 1) {
            //只有一首歌  重复播放
            if (self.musicState == 0) {
              self.thisMusicIndex =
                self.thisMusicIndex >= self.musicList.length - 1
                  ? 0
                  : self.thisMusicIndex + 1;
              self._getInfo();
            }
          }
          player.play();
          self.top = 0;
          self.o = 0;
          self.wordIndex = 0;
          self.wordsTop = 0;
          self.currentProgress = "0%";
        }
      }
    },
    Contorl() {
      player.currentTime = 100;
    }
  }
};
</script>
<style scoped>
@import url("./player.css");
</style>