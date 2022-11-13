<!-- <template>
     <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedValue: ""
      };
    },
    created() {
      this.selectedValue = this.$i18n.locale;
    },
    methods: {
      onChange(event) {
        this.$router.replace(this.switchLocalePath(event));
      }
    }
  };
  </script>
  
  <style scoped>
  .subtitle {
    font-weight: 300;
    font-size: 3em;
    color: #2E495E;
    word-spacing: 5px;
    padding-bottom: 15px;
    margin-top: 200px;
  }
  </style>
   -->