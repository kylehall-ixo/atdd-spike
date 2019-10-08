Feature: Is It Friday, Yet?
    Everybody wants to know when it's Friday

    Scenario Outline: Today is or is not Friday
        Given today is "<day>"
        When I ask if today is Friday
        Then I should be told "<answer>"

        Examples:
            | day            | answer |
            | Friday         | Yep!   |
            | Sunday         | Nope   |
            | anything else! | Nope   |
