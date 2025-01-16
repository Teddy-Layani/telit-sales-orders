import { client  } from './client';

export const getSalesOrders = async (params) => {
    const { data } = await client.get(
        'SalesOrderSet',
        {
            params
        }
    );

    return data.d?.results;
};
