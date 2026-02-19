import { Buttons } from './buttons'

export const MainPage = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-muted">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="mb-4 text-xl font-medium text-center">UI Kit Training (dark mode <input type="checkbox" onChange={toggleDarkMode} />)</h1>
        <div className="flex gap-16">
          <Buttons />
        </div>
      </div>
    </div>
  )
}
