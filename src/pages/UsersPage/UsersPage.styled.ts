/**
 * Users Page - Styled Components
 */

import styled from 'styled-components';

export const PageWrapper = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 20px;
`;

export const PageContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const PageHeader = styled.header`
    margin-bottom: 32px;
    text-align: center;
`;

export const PageTitle = styled.h1`
    color: white;
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 16px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const PageSubtitle = styled.p`
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin: 0;
`;

export const ContentCard = styled.div`
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;
`;

