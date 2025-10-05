import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

type ToastProps = {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onDismiss: () => void;
};

const toastConfig = {
  success: {
    icon: <CheckCircle className="text-green-500" />,
    style: 'bg-green-900 border-green-700',
  },
  error: {
    icon: <XCircle className="text-red-500" />,
    style: 'bg-red-900 border-red-700',
  },
  info: {
    icon: <Info className="text-blue-500" />,
    style: 'bg-blue-900 border-blue-700',
  },
  warning: {
    icon: <AlertTriangle className="text-yellow-500" />,
    style: 'bg-yellow-900 border-yellow-700',
  },
};

const Toast = ({ message, type, onDismiss }: ToastProps) => {
  const { icon, style } = toastConfig[type];

  return (
    <div
      className={cn(
        'fixed top-5 right-5 flex items-center p-4 rounded-lg text-white border',
        style
      )}
    >
      <div className="mr-3">{icon}</div>
      <div>{message}</div>
      <button onClick={onDismiss} className="ml-4 text-white">
        <XCircle size={20} />
      </button>
    </div>
  );
};

export default Toast;