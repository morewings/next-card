import {debounce} from 'lodash';

export const getTemplateName = debounce(
    async (): Promise<number> => {
        const response = await fetch(
            'https://www.random.org/integers/?num=1&min=1&max=99&col=1&base=10&format=plain&rnd=new',
            {
                method: 'GET',
            }
        );
        return await response.json();
    },
    666,
    {leading: true}
);
