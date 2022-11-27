    <template>
        <div>      
        </div>
        <div class="modal-backdrop">
            <div class="modal">
              <!-- <slot name="header">
              </slot> -->
       {{title=="jam" ? title :  `🎊 ${title} 🎊`}} 
              <!-- <slot name="body">
              </slot>
              <slot name="footer">
              </slot> -->
            </div>
            
 
          </div>
    </template>
    <script>
import { divide } from 'lodash';
import { ref, onMounted } from "vue"
import Button from '../components/Button.vue'
        export default {
        props: {title: String, show: Boolean },
        setup(props, context) {
            console.log(props, 'show')

    return;
  }
    }
    </script>
    
    <style lang="scss" scoped>

    * {
        color: white;
        z-index: 3000;
        text-align: center;
        margin: auto;
      
    }
    
    </style>