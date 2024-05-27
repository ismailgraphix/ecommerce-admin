'use client'

import { Store } from "@prisma/client";
import { Heading } from '@/components/ui/heading';

interface SettingFormProps{
    initialData: Store;
}

export const SettingsForm: React.FC<SettingFormProps> = ({initialData}) =>{ 
    return(
        <div className="flex items-center justify-between">
            <Heading 
            title='settings'
            description='Manage store preference'
            />

        </div>
    )
}