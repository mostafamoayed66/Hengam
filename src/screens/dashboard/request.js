import axios from '../../helpers/axios'

async function dashboardRequest(payload) {
  const response = await axios
    .get(
      `/time_tracking/time_entries/?page=${payload.page}&&workspace=${payload.workspace}`,
    )
    .then(res => res.data)
  return response
}

export default dashboardRequest
