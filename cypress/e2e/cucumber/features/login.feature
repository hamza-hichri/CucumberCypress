Feature: Authentification suite
  Scenario: login uncorrectly
    Given I open the website
    When I write my credentials uncorrectly
    Then a bad credentials shows
    
  Scenario: login correctly
    Given I open the website 
    When I write my credentials correctly
    Then a homepage will be displayed