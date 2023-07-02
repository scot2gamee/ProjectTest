import {apiservice} from '../service';

export async function TestAPI() {
  try {
    const response = await apiservice({
      path: '/course/getallmain?page=1&lan=TH',
      method: 'get',
    });
    if (response.status == 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
