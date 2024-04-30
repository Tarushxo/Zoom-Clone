import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
  
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    buttonText?: string;
    handleClick?: () => void;
    children?: React.ReactNode;
    image?: string;
    buttonIcon?: string
}

const MeetingModal = ({isOpen ,onClose,title,className,buttonText,handleClick,children,image,buttonIcon}:MeetingModalProps) => {
  return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white '>
                <div className='flex flex-col gap-6'>
                    {image && (
                    <div className='flex justify-center'>
                        <Image src={image} alt='logo' width={72} height={72} className='' />
                    </div>
                    )}
                    <h1 className={cn('text-3xl font-bold leading-[42px]',className)}>{title}</h1>
                    <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 'onClick={handleClick}>
                        {buttonIcon && (<Image src={buttonIcon} alt='logo' width={20} height={20} />)} &nbsp;
                        {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
  )
}

export default MeetingModal