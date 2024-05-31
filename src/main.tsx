
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.css'
import queryClient from './reactQuery.ts'
import { QueryClientProvider } from '@tanstack/react-query' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>  
  
)
