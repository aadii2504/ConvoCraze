import { create } from 'zustand' 

import React from 'react'

const useConversations = create ((set) => ({
        selectesConversation: null ,
        setSelectesConversation: (selectesConversation) => set({ selectesConversation }) ,
        messages:[],
        setMessages: (messages) => set({ messages }),
}))



export default useConversations
