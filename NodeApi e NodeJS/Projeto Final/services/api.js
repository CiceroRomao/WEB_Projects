//conecta com o bd
//talvez n utilize pois eu montei o projeto de forma diferente a do vidoe do professor
//no caso planejo reutilizar as funções do back-end
import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:3001/api/multas'})

export default api