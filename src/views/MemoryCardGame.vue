<template>
  <div class="gameArea">
    <h4>Current Turn: {{ counter }}</h4>
    <div class="boxHolder">
      <div class="box" v-for="(box, index) in boxData" :key="index">
        <button :class="box.show ? 'show' : ''"
                @click="showBox(index, box.value)">
          <div v-if="box.show">
            <img :src="box.value" alt="">
          </div>
          <div v-if="!box.show">
            <img :src="turnedCard.value" alt="">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MemoryCardGame",
  data() {
    return {
      boxData: [
        {id: 1, value: "/Cat1.jpg", show: false},
        {id: 2, value: "/Cat2.jpg", show: false},
        {id: 3, value: "/Kitten1.jpg", show: false},
        {id: 4, value: "/Kittens.jpg", show: false},
        {id: 5, value: "/Kittens.jpg", show: false},
        {id: 6, value: "/Kitten1.jpg", show: false},
        {id: 7, value: "/Cat2.jpg", show: false},
        {id: 8, value: "/Cat1.jpg", show: false},

      ],
      turnedCard: {value: "/QuestionMark.jpg", show: true},
      currVal: null,
      result: '',
      counter: 0,
      RestartFlag: false,
      RestartCounter: 0
    }
  },

  methods: {
    showBox(idPriv, valuePriv) {
      console.log("Values: ", this.currVal, valuePriv, this.boxMatchCounter, this.counter, this.RestartCounter)

      this.boxData[idPriv].show = true;

      if (!this.currVal) {
        this.currVal = valuePriv
      } else if (valuePriv === this.currVal) {
        this.counter += 1
        this.result = "Great!"
        this.currVal = null
        alert(this.result)
      } else {
        if (!this.RestartFlag) {
          this.result = "Try Again"
        } else {
          this.ResetMessages()
          this.RestartFlag = false
        }
        if (this.RestartCounter < 5) {
          this.counter = 0
        }
        this.boxData.map(box => box.show = false)
        this.currVal = null
        alert(this.result)
      }
      this.ResetCards()
    },
    ResetCards() {
      if (this.counter === 4) {
        this.boxData.map(box => box.show = false)
        this.currVal = 1
        this.RestartFlag = true
        this.RestartCounter += 1
      }
    },
    ResetMessages() {
      if ((this.RestartCounter === 1)) {
        this.result = "Again?"
      } else if (this.RestartCounter === 2) {
        this.result = "Again??"
      } else if (this.RestartCounter === 3) {
        this.result = "Nothing will change so stop, please"
      } else if (this.RestartCounter === 4) {
        this.result = "Nothing, seriously"
      } else if (this.RestartCounter === 5) {
        this.result = "Grr"
      } else {
        this.result = ""
        if (this.RestartCounter >= 7) {
          this.Redirect()
        }
      }
    },
    Redirect() {
      var result = document.getElementById("result")
      document.location.href = '/Have_Fun'
    },
  }
}

</script>

<style lang="scss" scoped>
* {
  transition: all 0.5s;
}

.gameArea {
  width: 100%;
  float: left;
}

.boxHolder {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin: 0 auto;
}

.box {
  overflow: hidden;
  object-fit: contain;
}

button p {
  margin-top: 46px;
  margin-bottom: 0;
}

button.show p {
  margin: 0;
}

.box button {
  width: 100%;
  height: 200px;
  border: 1px solid #add;
  border-radius: 0;
}

.box button span {
  font-size: 50px;
  opacity: 0;
}

.box img {
  width: 100%;
  height: 200px;
}
</style>
