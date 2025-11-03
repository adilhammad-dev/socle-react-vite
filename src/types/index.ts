export interface Report {
  id: string;
  title: string;
  value: number;
  updatedAt: string; // ISO date
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// Props examples
export interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

