using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

public class OrientDbService
{
    private const string BaseUrl = "http://localhost:2480/";
    private const string DbName = "ProTrack";
    private const string Query = "studio/index.html#/database/";
    private const string UserClass = "OUser";

    private const string User = "Admin";
    private const string Password = "ProTrackAdmin";

    private readonly HttpClient _httpClient;

    public OrientDbService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        // Konfiguriere den HttpClient für Basic Auth
        ConfigureHttpClientForBasicAuth();
    }

    private void ConfigureHttpClientForBasicAuth()
    {
        var authToken = Encoding.ASCII.GetBytes($"{User}:{Password}");
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(authToken));
    }

    public async Task<string> GetRecords()
    {
        var url = $"{BaseUrl}{Query}{DbName}/sql/select from {UserClass}";
        var response = await _httpClient.GetAsync(url);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}