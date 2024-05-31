import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import api from '../api/github.ts'
import { Repository } from './types.ts';

async function fetchRepos(ctx: QueryFunctionContext) {
    const [_,githubUser] = ctx.queryKey
    console.log(githubUser)
    const {data} = await api.get<Repository[]>(`/users/${githubUser}/repos`)
    return data; 
}

export function useFetchRepositories(githubUser: string) {
    return useQuery({
        queryKey: ['repos', githubUser], 
        queryFn: fetchRepos
    })
}
