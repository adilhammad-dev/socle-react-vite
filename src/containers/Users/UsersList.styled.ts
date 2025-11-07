/**
 * Users List - Styled Components
 */

import styled from 'styled-components';

export const PageContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
`;

export const Container = styled.div`
    background: #f5f5f5;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #e0e0e0;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 28px;
    color: #333;
    font-weight: 600;
`;

export const RefreshButton = styled.button`
    padding: 10px 20px;
    background: #1976d2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background: #1565c0;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(25, 118, 210, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        background: #bdbdbd;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`;

export const UserGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const UserCard = styled.div`
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #ffffff;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        border-color: #1976d2;
    }
`;

export const UserName = styled.h3`
    margin: 0 0 12px 0;
    color: #212121;
    font-size: 18px;
    font-weight: 600;
`;

export const UserEmail = styled.p`
    margin: 0;
    color: #757575;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const UserAzureId = styled.span`
    display: inline-block;
    margin-top: 8px;
    padding: 4px 8px;
    background: #e3f2fd;
    color: #1976d2;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
`;

export const Message = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #757575;
    font-size: 16px;
`;

export const ErrorMessage = styled(Message)`
    color: #d32f2f;
    background: #ffebee;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const LoadingSpinner = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #1976d2;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Stats = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const StatLabel = styled.span`
    font-size: 12px;
    color: #757575;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const StatValue = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #1976d2;
`;

