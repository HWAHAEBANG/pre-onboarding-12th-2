import { AxiosPromise } from 'axios';
import { instance } from '../configs/axios';
import { Issue } from '../types/issueType';
import { REPOSITORY } from '../constants/repository';

const getIssue = (state: string, sort: string, page: number): AxiosPromise<Issue[]> => {
  return instance({
    url: `/repos/${REPOSITORY.organization}/${REPOSITORY.repository}/issues?state=${state}&sort=${sort}&per_page=15&page=${page}`,
    method: 'get',
  });
};

export default getIssue;
