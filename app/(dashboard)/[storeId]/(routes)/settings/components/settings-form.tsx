'use client'

import { Store } from "@prisma/client";
import { Heading } from '@/components/ui/heading';
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

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
<Button variant='destructive' size='sm' onClick={() =>{}}>
    <Trash className="h-4 w-4"/>
</Button>
        </div>
    )
}