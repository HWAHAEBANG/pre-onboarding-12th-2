import { AxiosPromise } from 'axios';
import { instance } from '../configs/axios';
import { Issue } from '../types/issueType';

export default {
  getIssue(state: string, sort: string, page: number): AxiosPromise<Issue> {
    return instance({
      url: `/repos/facebook/react/issues?state=${state}&sort=${sort}&per_page=20&page=${page}`,
      method: 'get',
    });
  },
};
