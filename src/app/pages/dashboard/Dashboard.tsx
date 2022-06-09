import React from 'react';

import { Button} from '../../shared/components';
import { useAuth } from '../../shared/hooks';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
    const { logout } = useAuth();

    return (
        <div className="dashboard-base flex-content-center flex-items-center flex-column">
            Tela com a lista de usuários

            <Button onClick={logout}>
                Logout
            </Button>
        </div>
    );
}
