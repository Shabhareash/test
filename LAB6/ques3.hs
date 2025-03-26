compose :: (b -> c) -> (a -> b) -> a -> c
compose f g x = f (g x)

processlist :: [Int] -> [Int]
processlist = map (compose (subtract 3) (*2))

main :: IO ()
main = print (processlist [1, 2, 3, 4])
