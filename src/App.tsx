import { createEffect, createSignal } from 'solid-js'
import './App.css'
import {useRosetty} from 'rosetty-solid';

function App() {
  const i18n=useRosetty();

  createEffect(() => {
    console.log(i18n());
  })
  createEffect(() => {
    console.log("test", i18n().t('test'));
  })

  createEffect(() => {
    console.log(i18n().actualLang());
  })


  return (
    <>
      <button class="border" onClick={() => {console.log("clicked"); i18n().changeLang('en')}}>EN</button>
      <button class="border" onClick={() => i18n().changeLang('fr')}>fr</button>
      <p>
        {i18n().t('test')}
      </p>
      <p textContent={i18n().t('test')}></p>
    </>
  )
}

export default App
