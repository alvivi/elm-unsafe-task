module Unsafe exposing (run)

import Native.Unsafe
import Task exposing (Task)


run : Task err ok -> Result err ok
run =
    Native.Unsafe.run
