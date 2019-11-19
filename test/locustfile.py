from locust import HttpLocust, TaskSet, task

class WebsiteTasks(TaskSet):
  
  @task
  def testPing(self):
    """Test Ping Endpoint.
    """
    with self.client('/ping', catch_response = True) as response:
      print(response.text)
    if(response.status_code == 200):
      return response.success()
    else:
      return response.failure()

class WebsiteUser(HttpLocust):
  """Default Endpoint Informations.
  """
  host = 'http://127.0.0.1:3001/api'
  task_set = WebsiteTasks
  min_wait = 1000
  max_wait = 15000
