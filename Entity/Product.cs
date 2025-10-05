using System.ComponentModel;
using System.Text.Json.Serialization;

namespace mock.webui.Entity
{
    public class Product
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;

        [JsonPropertyName("popularityScore")]
        public double PopularityScore { get; set; }

        [JsonPropertyName("weight")]
        public double Weight { get; set; }

        [JsonPropertyName("images")]
        public Images Images { get; set; } = null!;

        public double Price { get; set; }

    }

    public class Images
    {
        [JsonPropertyName("yellow")]
        [DisplayName("Yellow Gold")]
        public string Yellow { get; set; }

        [JsonPropertyName("rose")]
        [DisplayName("Rose Gold")]
        public string Rose { get; set; }

        [JsonPropertyName("white")]
        [DisplayName("White")]
        public string White { get; set; }
    }
}
