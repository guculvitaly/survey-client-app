export class Utils {
/**
 * Base urls to WebApi
 */
      baseUrl = 'https://localhost:44330//api/';

      getAllSurveyList = this.baseUrl + 'survey/surveys';
      getSingleSurvey = this.baseUrl + 'survey/' 
      createSurvey = this.baseUrl + 'survey/survey'
      listQuestions = this.baseUrl + 'survey/survey/';
      addNewQuestionToSurvey = this.baseUrl + 'question/survey/tolist/'
}