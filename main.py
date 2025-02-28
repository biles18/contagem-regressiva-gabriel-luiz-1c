def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            """)
        basic.show_string("AAAAAAAAAAAAAAAA cachorro kkkkkkkkkkkkkkkkk!")
    elif input.button_is_pressed(Button.B):
        basic.show_string("botão não pressionado")
        led.plot(0, 0)
        input.on_button_pressed(Button.A)
basic.forever(on_forever)
