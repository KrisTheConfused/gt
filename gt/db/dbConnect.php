<script language="php">
$db = mysqli_connect("localhost", "Kris", "WhatsTheThingWithThis", "SolveDB");
if(!$db)
{
  exit("Verbindungsfehler: ".mysqli_connect_error());
}
</script>