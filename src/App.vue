<template>
  <div>
    <router-view/>
    <div>
      <h3>This button is to redirect to MemoryGame from any page:</h3>
      <button>
        <router-link to="/memorycard">✨</router-link>
      </button>
    </div>
  </div>
</template>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  background: #0f001f;
  height: 100vh;
  text-align: center;
}

//button {
//  width: 50%;
//  height: 100px;
//  border: 1px solid #900000;
//  border-radius: 0;
//}
</style>
