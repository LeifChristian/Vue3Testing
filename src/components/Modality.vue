<template>
    <div>
      <transition name="modal">
        <div v-if="isOpen">
          <div class="overlay" @click.self="isOpen = false;">
            <div class="modal">
              <h1 style="font-weight: 900">Modal heading</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button @click="isOpen = !isOpen, $emit('closed')">
                {{ isOpen ? "Close" : "Open" }} modal
              </button>
            </div>
          </div>
        </div>
      </transition>
      <button v-if="isOpen" @click="isOpen = !isOpen"  :style="[isOpen ?{ display: 'none'  } : '']">
        {{ isOpen ? "Close" : "Open" }} modal
      </button>

      <button v-if="!isOpen" @click="isOpen = !isOpen, $emit('open')">
        {{ isOpen ? "Close" : "Open" }} modal
      </button>
     
    </div>,
  </template>
  
  <script>
 export const thing = "red"
  export default {
    emits: ["open", "closed"],
    data: function() {
      return {
        isOpen: false
      };
    },

    watch: {
      
    }
  };
  </script>
  
  <style scoped>
  .modal {
    z-index: 2000;
    width: 500px;
    margin: 0px auto;
    padding: 20px;
    background-color: black;
    border-radius: 2px;
    box-shadow: 0 2px 8px 3px;
    transition: all 0.2s ease-in;
    font-family: Helvetica, Arial, sans-serif;
  }
  .fadeIn-enter {
    opacity: 0;
  }
  
  .fadeIn-leave-active {
    opacity: 0;
    transition: all 0.2s step-end;
  }
  
  .fadeIn-enter .modal,
  .fadeIn-leave-active.modal {
    transform: scale(1.1);
  }
  button {
    padding: 7px;
    border-radius: .51rem;
    margin-top: 10px;
    background-color: dodgerblue;
    color: black;
    font-size: 1.1rem;
  }
  
  .overlay {
    z-index: 2000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
    transition: opacity 0.2s ease;
  }
  </style>