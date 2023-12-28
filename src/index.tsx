/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import {RosettyProvider} from 'rosetty-solid';
import fr from 'dayjs/locale/fr';

const root = document.getElementById('root')

render(() => <RosettyProvider languages={{fr: {dict: {test: 'toto'}, locale: fr},en: {dict: {test: 'EN'}, locale: fr}}} defaultLanguage={"fr"}><App /></RosettyProvider>, root!)
