using Microsoft.AspNetCore.Mvc;
using mock.webui.Entity;
using Newtonsoft.Json;

namespace mock.webui.Controllers
{
    public class ProductController : Controller
    {

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var products = new List<Product>();

            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:44314/api/home"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    products = JsonConvert.DeserializeObject<List<Product>>(apiResponse);
                }
            }

            return View(products);
        }
    }
}
