Feature: Sales Dashboard

    Background:
        #TEST CASES: @C1, @C3, @C13, @51
        Given User is logged in with valid credentials
        And User is on Sales Dashboard Page
        Then Sales Dashboard is visible

    Scenario: Verify Revenue card is visible and correct on Sale Dashboard
        #TEST CASES: @C2, @C15, @C41
        Then Revenue card is visible and correct

    Scenario: Verify Sales By Category card is visible and correct on Sale Dashboard
        #TEST CASES: @C4, @C16
        Then Sales By Category card is visible and correct

    Scenario: Verify Daily Sales card is visible and correct on Sale Dashboard
        #TEST CASES: @C5, @C17
        Then Daily Sales card is visible and correct

    Scenario: Verify Summary card is visible and correct on Sale Dashboard
        #TEST CASES: @C6, @C18, @C28, @C43, @C44, @C45
        Then Summary card is visible and correct
        
    Scenario: Verify Total Orders card is visible and correct on Sale Dashboard
        #TEST CASES: @C7
        Then Total Orders card is visible and correct