export function App() {

  const myText = "HFGHFGHFHFHGFHGF"
  return (
    <> // FRAGMENT SERVE COMO PAI DE TODOS OS ELEMENTOS
      <div>
        <h1>{myText}</h1>
      </div>
    </>
  )
}

export function App2() {
  return (
    <div>
      <h1>Vite + React</h1>
    </div>
  )
}

/* export default App -> Uma coisa só por pagina */

/* 
Existem 2 jeitos de exportar

Exportar "Padrão" -> Uma coisa só por pagina
apenas Exportar -> 
*/