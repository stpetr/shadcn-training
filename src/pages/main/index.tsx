import { Tabs } from '@base-ui/react/tabs'

import { Buttons } from './buttons'
import { Inputs } from './inputs'

export const MainPage = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-muted">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="mb-4 text-xl font-medium text-center">UI Kit Training (dark mode <input type="checkbox" onChange={toggleDarkMode} />)</h1>
        <Tabs.Root defaultValue="inputs" className="w-full">
          <Tabs.List className="mb-6 flex items-center justify-center gap-2">
            <Tabs.Tab
              value="buttons"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-active:bg-black data-active:text-white"
            >
              Buttons
            </Tabs.Tab>
            <Tabs.Tab
              value="inputs"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors data-active:bg-black data-active:text-white"
            >
              Inputs
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="buttons">
            <div className="flex gap-16">
              <Buttons />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="inputs">
            <div className="flex gap-16">
              <Inputs />
            </div>
          </Tabs.Panel>
        </Tabs.Root>
      </div>
    </div>
  )
}
