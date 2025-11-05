import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {store} from 'services/store'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {AuthProvider} from 'contexts/AuthContext'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
)
